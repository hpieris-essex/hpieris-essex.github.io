---
sidebar_position: 8
---

### Presentation Slides

https://docs.google.com/presentation/d/1AypeJu8SnGz2TZQTwwAmj5-9QP6qsoR1/edit#slide=id.p1

### Presentation Transcript

[Cover Slide]
In this presentation, we are going to cover a multi-agent system to prevent inadvertent leaks of secrets and key files for protecting sensitive information with automated file scanning. 

[Slide 2]
As you know, cybersecurity is a critical concern for many and really all organizations. We have seen many large-scale breaches, such as SolarWinds, Microsoft, FireEye, and CrowdStrike, and even Okta, the security company. One of the common ways that hackers gain access to sensitive information is by looking for security and key files that are leaked to the outside world by accident or by mistake. 

[Slide 3]
With this tool, what we are doing is deploying a multi-agent system to scan a given folder input to identify any security or key files and quarantine them. At a high level, if we go over the system architecture, there are two types of agents that this system deploys. The first type is a leader agent.

There is one leader agent, and then there are many worker agents. You invoke the system through the command line and define the number of worker agents that you'd like to launch. And also, you provide the input folder about where the system should perform the scans. The system is quite adaptable and scalable to meet different resource requirements.

For example, being able to define a number of worker agents gives you the flexibility to run a really multithreaded system and use all the cores available in your CPU. And also, you can deploy this in a really scalable pattern. 

[Slide 4]
Just diving a bit more into the components and roles, the leader agent's role is to receive the input path and currently store files to be processed. That's the very first job. The second job is to monitor and launch and monitor agents and replace the unresponsive ones. Worker agents, on the other hand, scan the files listed by the leader agent and identify and quarantine sensitive files based on two patterns.

One is the file extension. For example, we look for things like PEM files and key files. The second is the content in these files, such as if something says "BEGIN SECRET KEY," etc. These are the kinds of content patterns that we look for. 

[Slide 5]
There were a number of design decisions that went into the system.

The very first one is using multiple agents for performance. As I mentioned before, deploying multiple agents allows parallel processing, which reduces scan time. You can imagine that if you have to scan a very large-scale file system, being able to deploy, let's say, dozens if not hundreds of agents to process this in parallel would result in a significant reduction in processing time. The second important design decision is the use of a leader-worker architecture for resilience. With this kind of security system, we want it to be fault-tolerant, and we do this by introducing this leader-worker architectural model. The leader agent continues to monitor the worker agents and automatically replace any agents that have failed.

This helps ensure that the system is not crashing at the worker level and that it’s not interrupting execution abruptly. The third important design decision is using queue-based task assignment. Queue-based processing is a very popular pattern used in large-scale data processing systems. We use that here to efficiently distribute tasks among agents. This helps minimize idle time and optimize productivity, ensuring that everyone gets an equal distribution of tasks and that there is no single point of failure in the system.

[Slide 6]
The technology stack we use includes Python as the programming language and several libraries that went into building the system. The first one is OS for interacting with the file system, and we use JSON for handling configuration files, including scanning the contents of JSON security files. We use UUID for generating unique agent IDs.

This is how the leader agent keeps track of various agents in the system and monitors them. We use argparse for command-line argument parsing. As I mentioned earlier, we allow the system to receive the input folder path and the number of agents, so we use argparse to read those parameters. We use threading for concurrency control with locking mechanisms to prevent agents from stepping on each other. 

[Slide 7]
There are a couple of important implementation considerations as well. Concurrency control becomes a very important consideration in a multi-agent parallel processing system because we do not want the agents to run into each other and perform tasks that are in conflict with each other. We use a thread lock to prevent these race conditions. We also use timers to introduce certain time lapses or gaps at various points to make sure that agents are not running into each other.

For example, when the system first comes online, what it does is elect a leader agent. The first agent to be launched self-selects as the leader agent. We introduce a time delay to ensure that no two agents are competing for the leader agent role, creating a conflicting situation.

From a file processing standpoint, we use two primary patterns for identifying files for quarantining. One is file extensions, and the second is reading the content and looking for certain important patterns within the file. We use quarantining to move the identified files from the source file system to a target location to make sure there is no risk.

Looking at the structure of the code, there are three key core modules that we have here. The first one is agent_launcher.py, the second is agent.py, and the third is file_proc.py. I’ll go through these in a bit of detail. There are also several support files, like utils.py, which provides certain utility classes, and requirements.txt, which lists all the required libraries that need to be installed. The agent_launcher.py is the entry point to the system. It launches agents to scan and quarantine files with sensitive information.

It takes command-line arguments and checks whether the correct number of arguments are provided, then it launches the known number of agents. The agent.py provides the actual agent implementation. For example, it initializes an agent with a unique ID, designates a leader, or allows the agent to self-elect as the leader. It goes through the processing of the files. Some good design choices here include generating a unique ID for the agent to track its activity, creating an initial log file to monitor the worker's actions, and checking for the existence of a leader. If no leader exists, the agent self-elects as the leader. The file_proc.py is where the file processing takes place. It handles the file operations such as checking for file names and file contents for security information. The utils.py performs several utility functions, such as moving files to quarantine, checking the last action time (this is how the leader agent keeps track of whether a given worker is active or inactive), and getting a list of workers. These are the key things. We use a Python virtual environment through Miniconda, and we use the requirements.txt to install the libraries into that virtual environment using Miniconda or the Conda distribution.

[Slide 8]
Let's go ahead and look through how the system works. On slide eight, you’re seeing three different windows mapped side by side. On the top, you’re seeing my VS Code window, where my code lives. This is where I'm launching the code. Of course, you can launch this directly from the command line or through a cron job for convenience. In this case, I'm launching it directly from the VS Code terminal. We use the Python command because this is a Python program, and our entry point is agent_launcher.py. The next parameter is the number 5, which indicates to the system to launch five workers. The second parameter is the input folder path.

This is the source location, or this is the path that we review to identify any files that are sensitive in nature. On the bottom left, you’re seeing a listing of files or a directory screenshot of that source directory. You can see a number of PNG files and various other files, and you can also spot two key files and one PEM file.

These are the files that we want to identify and quarantine. On the lower right-hand side, you see the content for the quarantine folder, which is currently empty.

[Slide 9]
When I press enter on that command, and I'm looking at slide number nine, on the top of the VS Code screen, you can see the system is running through and it has launched the agents and acquired a lock on the list of files or the queue of processing. Various agents are running through and processing these files. On the bottom left, you still see those key files, and on the bottom right, the quarantine folder is still empty because we are still going through the processing stage. 

[Slide 10]
The final screenshot of the demonstration shows the processing going forward. On the left-hand side, you no longer see the security and key files. On the right-hand side, you see those files have moved over to the quarantine folder.

The system performed as expected and picked out those key and PEM files and moved them to the quarantine directory as expected.

[Slide 11]
In conclusion and future work, our system offers a quite performant, resilient, and effective way to identify and quarantine sensitive files. The approach we are using here is quite scalable for several reasons. One, we have a multi-agent system where you can indicate the number of agents you want to launch. The more processing capacity you have, the more agents you can use to process these files efficiently. The second way this is scalable is that you can introduce various mechanisms to identify secret and key files.
