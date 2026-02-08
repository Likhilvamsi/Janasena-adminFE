import React from "react";
const LiveElection = () => {
    return (
        <>
            <section>
                <div className=" p-2 flex justify-between gap-4 w-full">
                    <div className="border border-gray-200 w-[50%] bg-white rounded-md p-4">
                        <div className="flex justify-between ">
                            <span>Live Election</span>
                            <button className="py-1 border border-green-500 px-5   rounded bg-green-100 text-sm text-green-400">
                                Active
                            </button>
                        </div>
                        <div className="pt-3 ">
                            <h2 className="font-semibold">Mumbai District Party President Election</h2>
                            <span className="">Mumbai District</span>
                        </div>
                    </div>
                    <div className="border border-gray-200 w-[50%] bg-white rounded-md p-4">Hi</div>
                </div>
            </section>
        </>
    )
}
export default LiveElection