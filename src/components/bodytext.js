import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const BodyText = props => {
  const serializer = {
    types: {
      normal: props => <pre>{props.normal}</pre>,
      h2: props => (
        <pre>
          <h2>{props.h2}</h2>
        </pre>
      ),
    },
  }
  return <BlockContent blocks={props} serializers={serializer} />
}
