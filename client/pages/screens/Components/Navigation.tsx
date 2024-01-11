import { useRouter, NextRouter } from 'next/router';

interface Command {
 execute(): void;
}

class HomeCommand implements Command {
 constructor(private router: NextRouter) {}

 execute() {
   this.router.push('/screens/Home/Home');
 }
}

class MainCommand implements Command {
 constructor(private router: NextRouter) {}

 execute() {
   this.router.push('/screens/Main/Main');
 }
}

class AboutUsCommand implements Command {
 constructor(private router: NextRouter) {}

 execute() {
   this.router.push('/screens/AboutUs/aboutUs');
 }
}

class DemoCommand implements Command {
 constructor(private router: NextRouter) {}

 execute() {
   this.router.push('/screens/Demo/demo');
 }
}

class LoginCommand implements Command {
 constructor(private router: NextRouter) {}

 execute() {
   this.router.push('/screens/Login/login');
 }
}

class SignUpCommand implements Command {
 constructor(private router: NextRouter) {}

 execute() {
   this.router.push('/screens/SignUp/SignUp');
 }
}

class SchedulerCommand implements Command {
 constructor(private router: NextRouter) {}

 execute() {
   this.router.push('/screens/Scheduler/Scheduler');
 }
}

class NavigationFactory {
 private router: NextRouter;

 constructor(router: NextRouter) {
   this.router = router;
 }

 createHomeCommand(): Command {
   return new HomeCommand(this.router);
 }

 createMainCommand(): Command {
   return new MainCommand(this.router);
 }

 createAboutUsCommand(): Command {
   return new AboutUsCommand(this.router);
 }

 createDemoCommand(): Command {
   return new DemoCommand(this.router);
 }

 createLoginCommand(): Command {
   return new LoginCommand(this.router);
 }

 createSignUpCommand(): Command {
   return new SignUpCommand(this.router);
 }

 createSchedulerCommand(): Command {
   return new SchedulerCommand(this.router);
 }
}

function useNavigation() {
 const router = useRouter();
 const navigationFactory = new NavigationFactory(router);

 function navigateTo(command: Command) {
   command.execute();
 }

 function ToHome() {
   navigateTo(navigationFactory.createHomeCommand());
 }

 function ToMain() {
   navigateTo(navigationFactory.createMainCommand());
 }

 function ToAboutUs() {
   navigateTo(navigationFactory.createAboutUsCommand());
 }

 function ToDemo() {
   navigateTo(navigationFactory.createDemoCommand());
 }

 function ToLogin() {
   navigateTo(navigationFactory.createLoginCommand());
 }

 function ToSignUp() {
   navigateTo(navigationFactory.createSignUpCommand());
 }

 function ToScheduler() {
   navigateTo(navigationFactory.createSchedulerCommand());
 }

 return {
   ToHome,
   ToMain,
   ToAboutUs,
   ToDemo,
   ToLogin,
   ToSignUp,
   ToScheduler
 };
}

export default useNavigation;