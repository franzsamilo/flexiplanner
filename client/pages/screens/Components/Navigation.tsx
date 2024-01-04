import { useRouter } from 'next/router'

function useNavigation () {
  const router = useRouter()
  function navigateTo (path: string) {
    router.push(path)
  }

  function ToHome () {
    navigateTo('/screens/Home/Home')
  }

  function ToAboutUs () {
    navigateTo('/screens/AboutUs/AboutUs')
  }

  function ToDemo () {
    navigateTo('/screens/Demo/Demo')
  }

  function ToLogin () {
    navigateTo('/screens/Login/login')
  }

  function ToSignUp () {
    navigateTo('/screens/SignUp/SignUp')
  }
  function ToScheduler () {
    navigateTo('/screens/Scheduler/Scheduler')
  }

  return {
    ToHome,
    ToAboutUs,
    ToDemo,
    ToLogin,
    ToSignUp,
    ToScheduler
  }
}

export default useNavigation
