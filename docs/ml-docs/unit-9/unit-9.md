# Code & Tasks


### CNN Architecture & Experimentation

Convolutional Neural Networks consist of layers that handle convolutional, pooling, and flattening. The CNN provided here follows the below architecture:

1. **First Convolutional Set:**
   - A concolutional layer with 32 filters of size 4x4, applied to input images of size 32x32 with 3 channels (RGB), using ReLU activation.
   - A max pool layer with a pool size of 2x2 to reduce the spatial dimensions.

2. **Second Convolutional Set:**
   - A second concolutional layer similar to the first one. 
   - Followed by a max pool layer with a pool size of 2x2, similar to the first set.

3. **Flattening:**
   - A Flatten layer to convert the 2D feature maps into a 1D vector, preparing the data for the dense layer.

4. **Dense Layers:**
   - A Dense layer with 256 neurons and ReLU activation for further processing.
   - The final Dense layer with 10 neurons and softmax activation, designed for classification into 10 distinct classes as the CIFAR-10 dataset has 10 classes.

The model uses categorical crossentropy as the loss function and uses Adam as the optimizer.

### Notebook

<a href="https://github.com/hpieris-essex/hpieris-essex.github.io/blob/ml-module/docs/unit-9/CNN_Object_Recognition.ipynb" target="_blank">Jupyter Notebook: CNN Object Recognition</a>
<br/>

Changing the input image value here ( `plt.imshow(x_test[image_id])`), appears to correctly predict the class.

e.g.

4 - frog
2 - ship
1 - ship

