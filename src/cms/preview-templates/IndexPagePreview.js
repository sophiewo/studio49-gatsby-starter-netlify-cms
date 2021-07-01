import React from 'react'
import PropTypes from 'prop-types'
import { UniqueIndexPageTemplate } from '../../templates/index-page_ss'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <UniqueIndexPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        // heading={data.heading}
        // subheading={data.subheading}
        // description={data.description}
        // intro={data.intro || { blurbs: [] }}
        // mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
