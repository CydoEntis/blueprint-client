type Props = { className?: string };

const Loading = ({ className }: Props) => {
  return (
    <div className={`${className}`}>
      <div className="loadingio-spinner-dual-ball-kl60d0q845a">
        <div className="ldio-wjre6bp1ok">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
