import styled from "styled-components";

const Parallax = styled.div`
  background-image: url(${(props) => props.imageUrl});
  min-height: 600px;

  background-attachment: fixed;
  background-position: ${(props) => props.position};
  background-repeat: no-repeat;
  background-size: ${(props) => props.size};

  transform: translateZ(2px) scale(0.9);
`;

function StripImage(props) {
  const { imageUrl, position, size } = props;
  return <Parallax imageUrl={imageUrl} position={position} size={size} />;
}

export default StripImage;
