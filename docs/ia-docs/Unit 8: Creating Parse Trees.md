---
sidebar_position: 5
---

Here we are creating constituency-based parse trees for the following phrases:

The government raised interest rates.
The internet gives everyone a voice.
The man saw the dog with the telescope.

Constituency-based parse trees are visualizations of the syntactic structure of sentences according to phrase structure grammar (Ruder, 2022). 



#### 1. The government raised interest rates.

```
  S
 / \
NP  VP
 |  /  \
DT  N V  NP
|   | |  /  \
The government raised NN NN
                  |  |
                interest rates

```

#### 2. The internet gives everyone a voice.

```
  S
 / \
NP  VP
 |  /  \
DT  NN V  NP
|   |   |  /  \
The internet gives PRP NN
                      |  |
                    everyone a voice
```

#### 3. The man saw the dog with the telescope.

```
     S
    / \
  NP   VP
  |    / \
 DT  N  V  NP
 |   |  |  /  \
The man saw DT  N PP
            |   | |  \
           the dog IN  NP
                   |   |
                  with DT  N
                       |   |
                      the telescope
```


#### References

Ruder, S. (2022) Constituency parsing. Available from: https://nlpprogress.com/english/constituency_parsing.html [Accessed 03 June 2024].