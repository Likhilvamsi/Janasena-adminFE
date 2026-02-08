import Text from "../ui/Text"

export const Statics = ({ summary = {} }) => {
    return (
        <>
            <section className="flex justify-start gap-3 w-[100%] mb-4">
                <div className="border bg-white p-4 rounded-md w-[25%]">
                    <Text>Total Members</Text>
                    <Text as="h3" variant="h3" className="font-semibold text-black-500 text-2xl">{summary.total}</Text>
                </div>
                <div className="border bg-white p-4 rounded-sm w-[25%]">
                    <Text>Active Members</Text>
                    <Text as="h3" variant="h3" className="font-semibold text-black-500 text-2xl">{summary.active}</Text>
                </div>
                <div className="border bg-white p-4 rounded-sm w-[25%]">
                    <Text>Voted (Active)</Text>
                    <Text as="h3" variant="h3" className="font-semibold text-black-500 text-2xl">{summary.voted}</Text>
                </div>
                <div className="border bg-white p-4 rounded-sm w-[25%]">
                    <Text>Not Voted</Text>
                    <Text as="h3" variant="h3" className="font-semibold text-black-500 text-2xl">{summary.not_voted}</Text>
                </div>
            </section>

        </>
    )
}