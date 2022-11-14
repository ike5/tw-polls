import React, { useState, useEffect } from "react";

function Stats() {
  const [kickValues, setKickValues] = useState(0);
  const [audioValues, setAudioValues] = useState(0);
  const [videoValues, setVideoValues] = useState(0);
  const [freezeValues, setFreezeValues] = useState(0);
  const [uniqueUsersValues, setUniqueUsersValues] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:3346/insights", requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setKickValues(json.values[0][0]);
        setAudioValues(json.values[0][1]);
        setVideoValues(json.values[0][2]);
        setFreezeValues(json.values[0][3]);
        setTotalVotes(json.values[0][4]);
        setUniqueUsersValues(json.values[0][5]);
      });
  });

  return (
    <div className="">
      <div className="stats shadow flex">
        <div className="stat">
          <div className="stat-figure text-secondary">
            {/* insert svg here */}
          </div>
          <div className="stat-title">Kicked out</div>
          <div className="stat-value">{kickValues}</div>
          <div className="stat-desc">
            Nov 14 -{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
            })}
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Audio Issues</div>
          <div className="stat-value">{audioValues}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Video Issues</div>
          <div className="stat-value">{videoValues}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>


      <div className="stats shadow flex">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Freezes</div>
          <div className="stat-value">{freezeValues}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Unique Users</div>
          <div className="stat-value">{uniqueUsersValues}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Votes</div>
          <div className="stat-value">{totalVotes}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
