import './App.css'

function App() {
  let user = {
    name: "Zahra Mohamed",
    email: "zahra.hypdev@gmail.com",
    profilePicture: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
    recentActivities: ["Eating", "Breathing", "Walking"]
  };

  return (
    <div className = "profile">
      <h1>{user.name}&apos;s Profile</h1>
      <img src={user.profilePicture}/>
      <p>Email: {user.email}</p>
      <h2>Recent Activities</h2>
      <ul>
        {user.recentActivities.map((act, index)=>(
          <li key={index}>{act}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
