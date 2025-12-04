import { useState, useEffect } from 'react';
import '../styles/containers.css' 

interface Container {
  image: string;
  status: string;
  created: number;
  name?: string;
}

export default function ContainerGrid() {
  const [containers, setContainers] = useState<Container[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContainers = async () => {
      try {
        const response = await fetch("/api/containers");
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        
        const data = await response.json();
        let fetchedContainers: Container[] = [];

        if (Array.isArray(data)) {
          fetchedContainers = data;
        } else if (data.containers && Array.isArray(data.containers)) {
          fetchedContainers = data.containers;
        } else if (data.data && Array.isArray(data.data)) {
          fetchedContainers = data.data;
        }

        setContainers(fetchedContainers);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load containers');
        console.error('Error fetching containers:', err);
      } finally {
        setLoading(false);
      }
    };

    loadContainers();
  }, []);

  const formatDate = (timestamp: number): string => {
    if (!timestamp) return 'Unknown';
    const date = timestamp < 946684800000 
      ? new Date(timestamp * 1000) 
      : new Date(timestamp);
    
    if (isNaN(date.getTime())) return 'Invalid date';
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatStatus = (status: string): string => {
    return status.split(" ")[0].trim();
  };

  const formatName = (name: string | undefined): string => {
    if (!name) return 'Unnamed Container';
    return name.split("/")[1] || name;
  };

  const formatImage = (image: string): string => {
    if (image.includes(":")) {
      image = image.split(":")[0];
    }
    return image || "N/A";
  };

  if (loading) {
    return (
      <section className="container-table-wrapper">
        <div className="loading-state">
          <p>Loading containers...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container-table-wrapper">
        <div className="error-state">
          <p>Failed to load containers: {error}</p>
        </div>
      </section>
    );
  }

  if (containers.length === 0) {
    return (
      <section className="container-table-wrapper">
        <p>No containers available at the moment.</p>
      </section>
    );
  }

  return (
    <section className="container-table-wrapper">
      <table className="container-table outline">
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>Image</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {containers.map((container, index) => (
            <tr key={`${container.name}-${index}`}>
              <td>
                <span className={`status-badge status-${formatStatus(container.status).toLowerCase()}`}>
                  {formatStatus(container.status)}
                </span>
              </td>
              <td>{formatName(container.name)}</td>
              <td>{formatImage(container.image)}</td>
              <td>{formatDate(container.created)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}