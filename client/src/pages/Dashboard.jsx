const user = JSON.parse(localStorage.getItem('user'));

if (user?.role === 'admin') {
    return <AdminDashboard />;
} else {
    return <UserDashboard />;
}
