import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="h-screen w-screen flex flex-col items-center justify-center space-y-5"
    >
      <h1 className="text-5xl">Oops!</h1>
      <p className="text-2xl text-center">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-xl text-center">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
