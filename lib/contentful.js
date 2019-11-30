import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// See https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer
export const renderRichText = json => {
  const options = {
    renderText: text =>
      text
        .split('\n')
        .reduce(
          (children, textSegment, index) => [
            ...children,
            index > 0 && <br key={index} />,
            textSegment,
          ],
          []
        ),
  }

  return documentToReactComponents(json, options)
}
