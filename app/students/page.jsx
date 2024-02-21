import { Sidebar } from "../(dashboard)/_components/sidebar"

function Students() {
  return (
    <div className="h-screen">
      <h1 className="text-center">Welcome to the students section</h1>
      
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      
    </div>
  )
}

export default Students
