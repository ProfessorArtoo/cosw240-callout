( function ( blocks, element, blockEditor ) {
  const el = element.createElement;
  const { useBlockProps, RichText } = blockEditor;

  blocks.registerBlockType( 'cosw240/callout', {
    edit: function ( props ) {
      return el( RichText, {
        ...useBlockProps(),
        tagName: 'p',
        value: props.attributes.message,
        onChange: ( value ) => props.setAttributes( { message: value } ),
        placeholder: 'Write your callout...'
      } );
    },
    save: function ( props ) {
      return el( RichText.Content, {
        ...useBlockProps.save(),
        tagName: 'p',
        value: props.attributes.message
      } );
    }
  } );
} )( window.wp.blocks, window.wp.element, window.wp.blockEditor );