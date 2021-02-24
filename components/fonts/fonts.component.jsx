import { Global } from '@emotion/react';

const Fonts = () => {
  return <Global 
    styles={`
      @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
    `}
  />
}

export default Fonts;