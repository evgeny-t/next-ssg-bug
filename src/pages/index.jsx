export const getStaticProps = async () => {
  return {
    props: { text: "текст" }
  };
};

export default ({ text }) => <div>{text}</div>;
