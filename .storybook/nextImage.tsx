import NextBaseImage, { ImageProps } from 'next/image'

const StorybookNextImage: React.FC<ImageProps> = (props) => (
  <NextBaseImage
    {...props}
    loader={({ src }) => {
      return src
    }}
  />
)
export const NextImage = StorybookNextImage as typeof NextBaseImage
