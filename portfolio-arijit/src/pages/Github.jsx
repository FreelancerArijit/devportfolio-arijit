import React, { useState, useEffect } from 'react';

function Github() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [linkedinData, setLinkedinData] = useState(null);

  // GitHub API
  useEffect(() => {
    fetch("https://api.github.com/users/FreelancerArijit")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // LinkedIn (static for now)
  useEffect(() => {
    setLinkedinData({
      name: "Arijit Chakraborty",
      headline: "Frontend Developer | React.js Specialist",
      connections: 500,
      profileUrl: "https://www.linkedin.com/in/arijit-chakraborty-761b4b221/",
      location: "India",
      followers: 200,
      posts: 15
    });
  }, []);

  // 🔹 Loading State
  if (loading || !linkedinData) {
    return (
      <div className="github-loading">
        <p>Loading profile...</p>
      </div>
    );
  }

  // 🔹 Error State
  if (error) {
    return (
      <div className="github-error">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="github-page">
      <div className="github-container">
        <div className="github-header">
          <h1>GitHub Profile</h1>
        </div>

        <div className="github-body">
          <div className="left">
            <img 
              src={data.avatar_url} 
              width={300} 
              alt={data.name || data.login} 
            />
            <a href={data.html_url} target="_blank" rel="noopener noreferrer">
              Visit GitHub →
            </a>
          </div>

          <div className="right">
            <h1>{data.name || data.login}</h1>
            <p>@{data.login}</p>

            {data.bio && <p>{data.bio}</p>}

            <div>
              <p>Followers: {data.followers}</p>
              <p>Following: {data.following}</p>
              <p>Repos: {data.public_repos}</p>
            </div>
          </div>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="linkedin-card">
        <h3>{linkedinData.name}</h3>
        <p>{linkedinData.headline}</p>
        <p>📍 {linkedinData.location}</p>
        <p>{linkedinData.connections}+ Connections</p>
        <a href={linkedinData.profileUrl} target="_blank" rel="noopener noreferrer">
          Connect →
        </a>
      </div>
    </div>
  );
}

export default Github;