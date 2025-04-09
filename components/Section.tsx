import React from "react";

const Section = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <section id={id}>
      <div className="text-gray-700">{children}</div>
    </section>
  );
};

export default Section;
