Pin.media.pickImage({
  allowsEditing: true,
  handler: function(image) {
    let info = Pin.media.getImageInfo({image: image})
    Pin.preview.show({text: JSON.stringify(info)})
  }
})