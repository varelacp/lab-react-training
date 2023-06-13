import { useState } from 'react';
import profilesData from '../data/berlin.json';

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [expandedProfileId, setExpandedProfileId] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleProfileClick = (profileId) => {
    setExpandedProfileId((prevExpandedId) =>
      prevExpandedId === profileId ? null : profileId
    );
  };

  const handleSortClick = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter profiles based on selected country
  const filteredProfiles = selectedCountry
    ? profilesData.filter((profile) => profile.country === selectedCountry)
    : profilesData;

  // Sort profiles based on sort order
  const sortedProfiles = filteredProfiles.sort((a, b) => {
    const compare = a.firstName.localeCompare(b.firstName);
    return sortOrder === 'asc' ? compare : -compare;
  });

  // Filter profiles based on search query
  const searchedProfiles = sortedProfiles.filter((profile) =>
    `${profile.firstName} ${profile.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="filter-bar">
        <button
          className={`filter-button ${
            selectedCountry === null ? 'active' : ''
          }`}
          onClick={() => handleCountryClick(null)}
        >
          All
        </button>
        {profilesData.map((profile) => (
          <button
            key={profile.country}
            className={`filter-button ${
              profile.country === selectedCountry ? 'active' : ''
            }`}
            onClick={() => handleCountryClick(profile.country)}
          >
            {profile.country}
          </button>
        ))}
      </div>
      <div className="sort-bar">
        <button className="sort-button" onClick={handleSortClick}>
          Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
        </button>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="profiles">
        {searchedProfiles.map((profile) => (
          <div
            key={profile.firstName + profile.lastName}
            className={`profile ${
              expandedProfileId === profile.firstName + profile.lastName
                ? 'expanded'
                : ''
            }`}
            onClick={() =>
              handleProfileClick(profile.firstName + profile.lastName)
            }
          >
            <img
              src={profile.img}
              alt={`${profile.firstName} ${profile.lastName}`}
            />
            {expandedProfileId === profile.firstName + profile.lastName && (
              <div className="profile-info">
                <p>
                  <strong>First Name:</strong> {profile.firstName}
                </p>
                <p>
                  <strong>Last Name:</strong> {profile.lastName}
                </p>
                <p>
                  <strong>Country:</strong> {profile.country}
                </p>
                <p>
                  <strong>Type:</strong>{' '}
                  {profile.isStudent ? 'Student' : 'Teacher'}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaceBook;
