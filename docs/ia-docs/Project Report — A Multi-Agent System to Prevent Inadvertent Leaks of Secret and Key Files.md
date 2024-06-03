---
sidebar_position: 2
---

In the modern age of interconnected technologies, cybersecurity is a key concern for any organization. Compromised security keys have contributed to high-profile security breaches, such as the SolarWinds, Microsoft, FireEye, and CrowdStrike incidents (Reuters, 2021). To solve this pressing issue, we propose a multi-agent system for digital forensics. The proposed system is capable of identifying and quarantining files containing secrets and keys. By doing so, our system aims to mitigate the risk of inadvertent exposure of these secrets and security breaches using exposed secrets and keys.

Our proposed system consists of two distinct agent types: leader and worker. At a high level, the system relies on worker agents selecting a file from a list defined by the leader (i.e., the agent can identify and retrieve data), checking whether it could contain sensitive information (i.e., the data is processed) if so, quarantining the file (i.e., the processed information is stored), and then repeating the process until all target files are processed. The system can be activated using the command line where the user specifies the number of worker agents they require. This makes the system adaptable and scalable to the user’s resources and needs. The below high-level diagram provides an overview of this process.



We made three key design decisions in coming up with the proposed system design: using multiple agents to improve runtime performance, using leader/ worker architecture to introduce worker agent resilience, and using a queue-based approach for efficient task assignment to each agent.

Multiple Agents for Improved Runtime Performance: Deploying multiple agents in the system allows parallel processing, which enables several processors to cooperate in solving a problem, reducing the compute time (Roosta, 2000); this results in the reduction of overall scanning time.

Leader/Worker Architecture for Agent Resilience: Implementing a leader/worker architecture contributes to system resilience by providing a fault-tolerant framework. Fault-tolerant design, which focuses on keeping a system in working condition is a vital consideration in any distributed system (Sari & Akkaya, 2015). In the proposed system, if a worker agent fails, the leader agent can dynamically launch a replacement worker agent to maintain the system in working condition. 

Queue-Based Task Assignment for Efficiency: A queue-based mechanism for task assignment offers efficient distribution of workload among the agents. Agents retrieve tasks from a queue, which optimizes task allocation and ensures that all agents are consistently productive, minimizing idle time. 

We propose using Python as the development language for this system along with os, json, uuid, time, argparse, and threading modules (i.e., libraries). 

os: The os module is a key component of the system for interacting with the operating system. It offers methods for reading or writing to the file system, which is essential for scanning and identifying key files.

json: The json module supports data serialization and deserialization. It allows the system to encode and decode JSON, a lightweight data-interchange format, which is commonly used for configuration files that might contain sensitive information such as secret keys.

uuid: The uuid module generates unique identifiers for each agent. These identifiers are crucial for tracking, logging, and auditing.

argparse: The argparse module allows the parsing of command line arguments. In the proposed design, we allow the user to define the number of workers by passing in a command line argument; this capability is provided by the argparse module.

threading: The threading module, and specifically the Lock class, is used for concurrency control. In a multi-agent system, concurrent access to shared resources can lead to race conditions; race conditions take place when multiple processes are trying to access the same data at the same time and may result in the program behaving in unexpected ways (Netzer & Miller, 1992). The Lock class will be used to ensure that only one agent can access the files list produced by the leader agent and maintained in a file, thereby preventing data corruption and ensuring thread safety during file scanning operations.

These libraries are well-documented, widely used, and supported by a large community of developers. These characteristics make them appropriate choices for building the proposed system.

The below diagram provides a detailed overview of the proposed system:


The proposed design aims to address the challenges associated with identifying secrets and key files in the target file system, avoiding race conditions in a multi-agent parallel execution environment, and system resilience. We identify keys and secrets by scanning for both known file types and contents of text-based file formats. We consider this to be adequate for identifying inadvertent exposure of secrets and keys. However, this approach won’t protect an organization from a malicious actor who would intentionally leak secrets or key files by storing them in binary file formats.

In the proposed design we aim to overcome race conditions by placing wait timers at various execution points. While this approach provides minimally sufficient safeguards for preventing race conditions, more sophisticated approaches such as waiting for completion using a callback function could be used to further improve the system.

The proposed design introduces worker resilience by enabling the leader agent to terminate non-responsive worker agents and replace them with new agents. The resilience of the system could be further improved by introducing a mechanism to recover from leader agent failures.
 
In conclusion, the proposed multi-agent system offers a performant, resilient, and effective approach to identifying and quarantining secrets and keys that may be present in a given file system. In doing so, it aims to mitigate the risk of inadvertent leaking of these secrets, and the resulting risk of compromising organizations' data.

References:

Netzer, R. & Miller, B. (1992) What are race conditions? Some Issues and Formalizations. ACM Letters on Programming Languages and Systems 1(1): 74-88. DOI: https://doi.org/10.1145/130616.130623

Roosta, S. (2000) Parallel Processing and Parallel Algorithms: Theory and Computation. New York: Springer-Verlag. Available from: https://books.google.com/books?hl=en&lr=&id=oyPUBwAAQBAJ&oi [Accessed 21 April 2024].

Sary, A. & Akkaya, M. (2015) Fault Tolerance Mechanisms in Distributed Systems. International Journal of Communications, Network and System Sciences 8(12): 471-482. DOI: https://doi.org/10.4236/ijcns.2015.812042

Satter, R. & Menn, J. (2021). SolarWinds, Microsoft, FireEye, CrowdStrike defend actions in major hack - U.S. Senate hearing. [online] Reuters. Available at: https://www.reuters.com/article/idUSKBN2AN1PY/ [Accessed 15 Apr. 2024].
