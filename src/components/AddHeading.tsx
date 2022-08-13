export interface ITopicWithHeading {
  heading?: string;
  topic: JSX.Element;
}

export const AddHeading: React.FC<ITopicWithHeading> = ({
  heading,
  topic,
}: ITopicWithHeading) => {
  const id = `${heading?.split(" ").join("").toLowerCase()}`;

  const goToViolation = (id: string) => {
    const violation = document.getElementById(id);
    window.scrollTo({
      top: violation?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div
      id={id}
      className={"component"}
      onClick={() => {
        goToViolation(id);
      }}
    >
      {heading && <h2>{`# ${heading}`}</h2>}
      {topic}
    </div>
  );
};
