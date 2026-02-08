import DashboardHeader from '../../components/layout/DashboardHeader'
import DashboardCards from '../../components/dashboard/DashboardCards'
import Button from '@/app/components/ui/Button'
export default function DashboardPage() {
    return (
        <>
            <DashboardHeader title={"Welcome, Rajesh"} para={"You have full administrative access to the party election system"}/>
            <DashboardCards />
        </>
    )
}
