# Jaccard Coefficient


#### Introduction

Jaccard similarity is a statistic used to compute the similarity between two objects (Karabiber, F., N.D.)

The formula for the jaccard coefficient is as below:

```
J(A, B) = |A ∩ B| / |A ∪ B|
```

#### Dataset

| Name   |      Gender      |  Fever | Cough | Test-1 | Test-2 | Test-3 | Test-4 |
|----------|:-------------:|------:|------:|------:|------:|------:|------:|
| Jack |  M | Y | N | P | N | N | A
| Mary |    F   | Y | N | P | A | P | N
| Jim | M | Y | P | N | N | N | A


#### The Process

Provided the above data set, we can take the below approach to calculate the Jaccard coefficients:

1. Convert each row into a set of attributes, where the attributes include only those columns with positive values (P - positive, N - negative, A - absent).
2. Calculate the Jaccard coefficient using the formula: J(A, B) = |A ∩ B| / |A ∪ B| shown above, where A and B are the sets from step 1, |A ∩ B| is the number of elements in both sets, and |A ∪ B| is the total number of unique elements across both sets.

Given the dataset:
- Jack: { Fever, Test-1 }
- Mary: { Fever, Test-1, Test-3 }
- Jim: { Fever, Cough }

#### Calculations

**Jack and Mary:**
- Jack ∩ Mary: {Fever, Test-1}
- Jack ∪ Mary: {Fever, Test-1, Test-3}
- Jaccard(Jack, Mary) = |{Fever, Test-1}| / |{Fever, Test-1, Test-3}| = 2 / 3

**Jack and Jim:**
- Jack ∩ Jim: {Fever}
- Jack ∪ Jim: {Fever, Test-1, Cough}
- Jaccard(Jack, Jim) = |{Fever}| / |{Fever, Test-1, Cough}| = 1 / 3

**Jim and Mary:**
- Jim ∩ Mary: {Fever}
- Jim ∪ Mary: {Fever, Cough, Test-1, Test-3}
- Jaccard(Jim, Mary) = |{Fever}| / |{Fever, Cough, Test-1, Test-3}| = 1 / 4


#### Results

The Jaccard coefficients:
- Jack and Mary: 2/3
- Jack and Jim: 1/3
- Jim and Mary: 1/4



#### References

Karabiber, F. (N.D.) Jaccard Similarity. Available from: https://www.learndatasci.com/glossary/jaccard-similarity [Accessed 19 February 2024].