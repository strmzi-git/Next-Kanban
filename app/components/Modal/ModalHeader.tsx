interface ModalHeaderProps {
  title: string;
  subtitle?: string;
}

const ModalHeader = function ({ title, subtitle }: ModalHeaderProps) {
  return (
    <div className="">
      <h2 className="text-center  text-3xl font-semibold text-gray900">
        {title}
      </h2>
      <h4 className="text-center text-lg font-light text-gray-600">
        {subtitle}
      </h4>
    </div>
  );
};

export default ModalHeader;
