import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../../firebase'

import { IoLogoGoogle } from "react-icons/io5";

const GoogleAuth = () => {
  const handleGooglezClick = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)
      const result = await signInWithPopup(auth, provider)
      console.log(result)
      console.log(result.user.displayName,result.user.email)
      //ya bata pathaune ho database ma user ko info
    } catch (error) {
      console.log("Couldnot connect to Google", error)
    }
    
  }
  return (
    <div>
      <button onClick={handleGooglezClick} type='button' className="p-1 rounded-md text-white bg-[#DB4437]">
        <IoLogoGoogle />
      </button>
    </div>
  )
}

export default GoogleAuth