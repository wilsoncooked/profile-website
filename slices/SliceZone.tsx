import { Sample } from '.'

const SliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case 'sample':
        return <Sample slice={slice} key={`slice-${index}`} />
      default:
        return null
    }
  })

export default SliceZone
