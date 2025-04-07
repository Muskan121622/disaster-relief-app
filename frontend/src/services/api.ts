
import axios from "axios";

// Define the API base URL (update this to match your backend server)
const API_BASE_URL = "http://localhost:1217/api/v1";

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});










// ✅ Handle Unauthorized (401) responses
api.interceptors.response.use(
  (response) => response, // ✅ Return the response if successful
  (error) => {
    if (error.response?.status === 401) {
      console.error("🚨 Unauthorized! Clearing token and redirecting to login.");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login"; // Redirect to login page
    }

    return Promise.reject(error);
  }
);













// AuthService for authentication
export const authService = {
  register: async (data: { name: string; email: string; password: string; role?: string }) => {
    try {
      const response = await api.post("/user/register", data);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Registration failed";
    }
  },

  login: async (data: { email: string; password: string }) => {
    try {
      const response = await api.post("/user/login", data);
      
      // ✅ Store user & token in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Login failed";
    }
  },

  getProfile: async () => {
    try {
      const response = await api.get("/user/profile");
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to fetch profile";
    }
  },

  logout: () => {
    // ✅ Clear token & user from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
};











//adminservice
export const adminService = {
  register: async (data: { name: string; email: string; password: string; role?: string }) => {
    try {
      const response = await api.post("/admin/signup", data);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Registration failed";
    }
  },

  login: async (data: { email: string; password: string }) => {
    try {
      const response = await api.post("/admin/login", data);
      
      // ✅ Store user & token in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Login failed";
    }
  },

  approveDonation: async (id: string,token:string) => {
    // try {
    //   const response = await api.put(`/admin/approve-donation/${id}`);
    //   return response.data;
    // } catch (error: any) {
    //   console.error(`❌ Error approving donation (ID: ${id}):`, error.response?.data || error.message);
    //   throw error.response?.data || "Failed to approve donation";
    // }



    try {
      const response = await api.put("/admin/approve-donation/${id}", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error: any) {
      console.error(`❌ Error approving donation (ID: ${id}):`, error.response?.data || error.message);
      throw error.response?.data || "Failed to approve donation";
    }




  },



  getProfile: async () => {
    try {
      const response = await api.get("/admin/profile");
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to fetch profile";
    }
  },

  logout: () => {
    // ✅ Clear token & user from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
};











// ✅ UserService for fetching users
export const userService = {
  getUsers: async (token: string) => {
    try {
      const response = await api.get("/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to fetch users";
    }
  }
};

// DonationService for donation-related APIs
export const donationService = {
  createDonation: async (data: { amount: number; description: string }) => {
    try {
      const response = await api.post("/user/donations", data);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to create donation";
    }
  },

  getDonations: async () => {
    try {
      const response = await api.get("/user/donations");
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to fetch donations";
    }
  }
};


export const donationService1 = {
  createDonation: async (data: { amount: number; description: string }) => {
    try {
      const response = await api.post("/donations", data);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to create donation";
    }
  },

  getDonations: async () => {
    try {
      const response = await api.get("/donations");
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to fetch donations";
    }
  }  ,
   
  // // ✅ Fixed approveDonation API route
  // approveDonation: async (id: string) => {
  //   try {
  //     const response = await api.put(`/admin/approve-donation/${id}`);
  //     return response.data;
  //   } catch (error: any) {
  //     throw error.response?.data || "Failed to approve donation";
  //   }
  // } 





};


// DisasterService for reported disasters
export const disasterService = {
  getDisasters: async () => {
    try {
      const response = await api.get("/disasters");
      return response.data?.data || []; // ✅ Extract `data` array
    } catch (error: any) {
      throw error.response?.data || "Failed to fetch disasters";
    }
  }
};







// VolunteerService for volunteer-related APIs
export const volunteerService = {
  registerVolunteer: async (data: { name: string; email: string; phone: string }) => {
    try {
      const response = await api.post("/user/volunteers", data);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to register volunteer";
    }
  },

  getVolunteers: async () => {
    try {
      const response = await api.get("/user/volunteers");
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to fetch volunteers";
    }
  }
};

// Export the API instance
export default api;















