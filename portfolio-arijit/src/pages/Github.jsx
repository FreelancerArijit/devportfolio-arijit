import React, { useState, useEffect } from "react";

function Github() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [linkedinData, setLinkedinData] = useState(null);

  // GitHub API
  useEffect(() => {
    fetch("https://api.github.com/users/FreelancerArijit")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // LinkedIn (static for now)
  useEffect(() => {
    setLinkedinData({
      name: "Arijit Chattopadhyay",
      headline:
        "Frontend Developer | React Developer | JavaScript Developer | HTML | CSS | Tailwind CSS | JavaScript  |  Typescript | React | NEXT | REST API Integration",
      imageUrl:
        "./images/profile2.jpeg",
      connections: 500,
      profileUrl: "https://linkedin.com/in/arijit-chattopadhyay-52088b27b",
      location: "India",
      followers: 200,
      posts: 15,
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
      <div
        className="linkedin-card"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "80px",
          padding: "10px",
          marginTop: "15px",
        }}
      >
        <img
          src={linkedinData.imageUrl}
          alt="profile"
          style={{
            width: "300px",
            height: "250px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", width: "700px" }}>
          <h3 style={{ marginTop: 15 }}>{linkedinData.name}</h3>
          <p style={{ margin: "4px 0" }}>{linkedinData.headline}</p>
          <p style={{ margin: "4px 0" }}>📍 {linkedinData.location}</p>

          <a
            href={linkedinData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "6px",
              textDecoration: "none",
              color: "#0a66c2",
            }}
          >
            Connect →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Github;
