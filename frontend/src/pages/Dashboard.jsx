import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Welcome Banner */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center mb-6">
          <h2 className="text-2xl font-bold text-teal-600">
            Welcome {user?.name || "Guest"} 👋
          </h2>
          <p className="text-gray-600 mt-2">
            Manage your appointments and consult with doctors online.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            onClick={() => navigate("/doctors")}
            className="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
          >
            <h3 className="text-lg font-semibold text-teal-600">
              👨‍⚕️ Find Doctors
            </h3>
            <p className="text-gray-500 mt-2">
              Browse doctors and book consultations.
            </p>
          </div>

          <div
            onClick={() => navigate("/appointments")}
            className="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
          >
            <h3 className="text-lg font-semibold text-blue-600">📅 My Appointments</h3>
            <p className="text-gray-500 mt-2">
              View or manage your upcoming appointments.
            </p>
          </div>

          <div
            onClick={() => navigate("/profile")}
            className="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
          >
            <h3 className="text-lg font-semibold text-purple-600">👤 My Profile</h3>
            <p className="text-gray-500 mt-2">
              Update your personal information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
