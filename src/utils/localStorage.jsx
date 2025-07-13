const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login UI using Tailwind CSS.",
        taskDate: "2025-07-10",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve the collapsing issue on small screens.",
        taskDate: "2025-07-09",
        category: "Bug",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Isha",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Write API Docs",
        taskDescription: "Document all existing API endpoints using Swagger.",
        taskDate: "2025-07-08",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update README",
        taskDescription: "Add setup instructions for new developers.",
        taskDate: "2025-07-07",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Optimize Images",
        taskDescription: "Compress and convert images to WebP format.",
        taskDate: "2025-07-06",
        category: "Performance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Build Dashboard Layout",
        taskDescription: "Create a grid layout with sidebar navigation.",
        taskDate: "2025-07-10",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Test User Flows",
        taskDescription: "Ensure all onboarding steps are functional.",
        taskDate: "2025-07-07",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Add Dark Mode",
        taskDescription: "Support dark/light toggle in app settings.",
        taskDate: "2025-07-11",
        category: "UI/UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Clean Old Logs",
        taskDescription: "Delete outdated logs from the database.",
        taskDate: "2025-07-06",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Build Notification System",
        taskDescription: "Implement real-time toast notifications.",
        taskDate: "2025-07-09",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Create Unit Tests",
        taskDescription: "Write tests for auth module using Jest.",
        taskDate: "2025-07-08",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Deploy to Production",
        taskDescription: "Push the current build to live server.",
        taskDate: "2025-07-07",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];



const admin = {
  "id": 101,
  "email": "admin@example.com",
  "password": "123",
  "role": "admin",
  "firstName": "Super Admin",
  "createdAt": "2025-07-08T10:00:00Z",
  "permissions": ["add_user", "delete_user", "view_all_tasks", "edit_task"]
}

export const setLocalStorage = () => {
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return {employees,admin}
}


