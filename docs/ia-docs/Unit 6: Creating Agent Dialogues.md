---
sidebar_position: 4
---

Below is an agent dialogue, using KQML and KIF, between two agents (named Alice and Bob).

Alice is an agent designed to procure stock and Bob is an agent that controls the stock levels for a warehouse. This dialogue demonstrates Alice asking Bob about the available stock of 50 inch televisions, and also querying the number of HDMI slots the televisions have.

In this example we assume there are 10 available 50 inch televisions and they have 3 HDMI slots.


#### Message 1: Alice sends a query to Bob asking if there are any 50-inch televisions in stock and requests the quantity.

```
(KQML
  (sender Alice)
  (receiver Bob)
  (performative ask-if)
  (content (KIF (exists (?x)
                     (and (television ?x)
                          (size ?x 50)
                          (in-stock ?x ?quantity)))))
  (reply-with query-stock)
)
```

#### Message 2: Bob responds to Alice's query, informing her that there are 30 units in stock.

```
(KQML
  (sender Bob)
  (receiver Alice)
  (performative tell)
  (content (KIF (= ?quantity 10)))  ; assuming there are 10 units in stock
  (in-reply-to query-stock)
)
```

#### Message 3: Alice sends another query to Bob asking for the number of HDMI slots in the 50-inch televisions.

```
(KQML
  (sender Alice)
  (receiver Bob)
  (performative ask-if)
  (content (KIF (exists (?x ?hdmi-slots)
                     (and (television ?x)
                          (size ?x 50)
                          (hdmi-slots ?x ?hdmi-slots)))))
  (reply-with query-hdmi)
)
```

#### Message 4: Bob responds to Alice's query, informing her that the 50-inch televisions have 3 HDMI slots.

```
(KQML
  (sender Bob)
  (receiver Alice)
  (performative tell)
  (content (KIF (= ?hdmi-slots 3)))  ; assuming there are 3 HDMI slots
  (in-reply-to query-hdmi)
)
```