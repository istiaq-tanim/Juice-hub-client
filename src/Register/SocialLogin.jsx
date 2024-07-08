import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../Provider/AuthProvider';
const SocialLogin = () => {
    const { goggleLogin } = useContext(UserContext)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const handleGoggle = () => {
        goggleLogin()
            .then(result => {
                const user = result.user
                console.log(user)
                const savedUser = { email: user.email, name: user.displayName, photo: user.photoURL, role: 'user' }
                fetch("https://juice-hub-server.vercel.app/users", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(savedUser)
                }).then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            navigate(from, { replace: true });
                        }
                    })
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <div className='flex items-center pt-4 space-x-1'>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                <p className='px-3 text-sm dark:text-gray-400'>
                    Signup with social accounts
                </p>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            </div>
            <div onClick={handleGoggle} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                <FcGoogle size={32} />
                <p>Continue with Google</p>
            </div>
        </div>
    );
};

export default SocialLogin;