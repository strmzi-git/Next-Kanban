import { ReactNode } from "react";

interface ContainerParams {
  children: ReactNode | ReactNode[];
}

const Container = function ({ children }: ContainerParams) {
  return (
    <div className="px-4 sm:px-6 md:px-8 relative lg:px-12">{children}</div>
  );
};

export default Container;
