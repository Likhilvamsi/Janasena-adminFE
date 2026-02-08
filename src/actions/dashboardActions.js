import { ROUTES } from '../app/routes/index'
export const dashboardActions = {
    handleLogout: (router) => {
        // Clear token
        document.cookie =
            'access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';

        // Redirect to login
        router.push(ROUTES.Login);
    },

    updateElection: async () => {
        // 20 lines of logic here
        console.log('Updating election')
    },

    deleteElection: async () => {
        // 20 lines of logic here
        console.log('Deleting election')
    },

    exportResults: async () => {
        // 20 lines of logic here
        console.log('Exporting results')
    },
}
