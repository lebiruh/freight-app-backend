import { Outlet, Navigate } from "react-router";

const AdminEditorProtectedRoute = () => {

  const AdminEditorData = JSON.parse(localStorage.getItem('adminEditorData'))

  return (
    AdminEditorData && AdminEditorData?.user_type == "editor" || AdminEditorData && AdminEditorData?.user_type == "admin" ? < Outlet/> : <Navigate to='/editor/login' replace />
  )
}

export default AdminEditorProtectedRoute