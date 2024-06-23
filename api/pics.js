exports.handler = async function (context, event, callback) {
    const client = context.getTwilioClient();
    const gallery = [];

    
    gallery.push(
        {
          src: "https://placekitten.com/200/300",
          description: "Look at this kitteh",
          alt: "A kitteh",
          thumbnailWidth: "200px",
        }
    );
    const messages = await client.messages.list({ to: context.TWILIO_NUMBER });
    for (const message of messages) {
      // You can have multiple medias on each message
      
        gallery.push({
          src: "https://placekitten.com/200/300",
          description: message.body,
          alt: message.body,
          thumbnailWidth: "200px",
        });
    }
    // Twilio Function will automatically turn gallery into proper JSON and set the 
    // header to application\json
    return callback(null, gallery);
  };