import { Link } from "react-router-dom";
import { Button } from "./button";

type ErrorProps = {
  title: string;
  backText?: string;
};

const Error: React.FC<ErrorProps> = ({ title, backText }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl py-2">{title}</h1>
      {backText && (
        <Link to="/">
          <Button>{backText}</Button>
        </Link>
      )}
    </div>
  );
};

export default Error;
