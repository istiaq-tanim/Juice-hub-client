import { useContext } from "react";
import { FaBriefcase, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useGetUserQuery } from "../../../features/user/userApi";
import { UserContext } from "../../../Provider/AuthProvider";
const UserHome = () => {
    const { user } = useContext(UserContext)
    const email = user?.email
    const { data: profile, isLoading, isError } = useGetUserQuery(email);
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <span>There is an Error</span>
    }

    return (
        <div className="w-full px-10 overflow-hidden">
            <div className="p-16">
                <div className="p-8 bg-white shadow mt-24">

                    <div className="relative">
                        <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 -top-0 -mt-44 flex items-center justify-center text-indigo-500">
                            <img className="rounded-full" src={profile?.photo} alt="" />
                        </div>
                    </div>


                    <div className="text-center mt-5">
                        <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                            {profile?.name}
                        </h3>
                        <div className="text-sm leading-normal flex justify-center items-center gap-2 mt-0 mb-2 text-blueGray-400 font-bold uppercase">

                            {
                                profile?.street || profile?.city || profile?.country &&
                                <>
                                    <FaMapMarkerAlt />
                                    <p>{profile?.street}, {profile?.city} , {profile?.country}
                                    </p>
                                </>
                            }
                        </div>
                        <div className="mb-2 text-blueGray-600 mt-5 flex justify-center items-center gap-2">

                            {
                                profile?.occupation && <>
                                    <FaBriefcase />
                                    <p>{profile?.occupation}</p>
                                </>
                            }
                        </div>
                        <div className="mb-2 text-blueGray-600 flex justify-center items-center gap-2">
                            <MdEmail />
                            <p>{profile?.email}</p>
                        </div>
                        <div className="mb-2 text-blueGray-600 flex justify-center items-center gap-2">
                            {
                                profile?.phone && <>
                                    <FaPhoneAlt />
                                    <p>{profile?.phone}</p>
                                </>
                            }
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col justify-center">
                        <p className="text-gray-600 text-center font-light lg:px-16">
                            {profile?.about}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserHome;
