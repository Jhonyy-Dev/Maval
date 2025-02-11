import styled from 'styled-components';

const FrameContainer = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  min-height: 300px;
  max-height: 600px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    min-height: 250px;
    max-height: 400px;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const World3DFrame = () => {
  return (
    <FrameContainer>
      <iframe src="/world.html" title="3D World" />
    </FrameContainer>
  );
};

export default World3DFrame;
