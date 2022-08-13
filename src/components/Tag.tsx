export interface ITag {
  children: string;
}

export const Tag = ({ children }: ITag): JSX.Element => {
  return <div className="tag">{children}</div>;
};
