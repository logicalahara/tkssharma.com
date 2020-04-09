---
date: 2020-04-05
title: 'Kubernetes in a nutshell — tutorial for beginners'
template: post
thumbnail: '../thumbnails/k8slogo.png'
slug: kubernetes-in-nutshell — tutorial-for-beginners
categories:
  - Popular
  - Docker
  - K8S
tags:
  - Docker
---

Deploy a complete application stack just in a few steps!

Kubernetes is gaining wide adoption. Even though a lot of us had an opportunity to work with this container orchestrator before, there is still a many of us, who have never played with this platform.

Currently, there is a plenty of various courses/playgrounds, which can help you start working with the Kubernetes, like [official Kubernetes tutorials](https://kubernetes.io/docs/tutorials/) or [katacoda](https://www.katacoda.com/courses/kubernetes). I also went through them, but in this article, you will find not only theory but also examples, which help you implement your Kubernetes resources. We will deploy a complete application stack, consisting of a database and backend, frontend parts. In the end, you will find some exercises to do. I hope you will like it 🙂.


*For the sake of simplicity, in this article, I will use the short name for Kubernetes: k8s.*

#k8s #k8s cluster #k8s objects #deploy with kubectl #scaling & rollback #exercises

## Prerequisites

Before we start, we need to install some tools and make sure that our environment is ready to play with Kubernetes.

- All the required tools, which have to be installed are listed in my [Github repository](https://github.com/tkssharma/k8s-learning), under the Prerequisites section. Prepare your environment, on the other hand, contains all commands, which have to be executed, before we start deploying our applications on Kubernetes.
Refernce
--------
- Srinath Challa https://www.youtube.com/user/srinathrchalla1
  
## Kubernetes and its components

### #Kubernetes #Master #Nodes #kubelet #node processes

Kubernetes is an open-source platform, very often called containers’ orchestrator. Each k8s cluster consists of multiple components, where Master, Nodes and k8s resources (k8s objects) are the most essential ones.

![Kubernetes cluster](https://cdn-images-1.medium.com/max/2234/1*GD8xmwahK4a96_6-kjUzJQ.jpeg)*Kubernetes cluster*

Master is the cluster orchestrator, which exposes the [k8s API](https://kubernetes.io/docs/concepts/overview/kubernetes-api/) ([docs](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.14/)). Every time, when we are deploying the app containers, we are telling something like: *“Hey Master! Here is the docker image URL of my application. Please, start the app container for me.”*. And then Master schedules the app instances (containers) to run on the Nodes. Kubernetes will choose where to deploy the app based on Nodes’ available resources.
> Master manages the cluster. It scales and schedules app containers and rolls out the updates.

Nodes are k8s workers, which run app containers. A Node consists of the following processes:

* [*kubelet](https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/)* — it’s an agent for managing the Node. It communicates with the Master using k8s API. It manages the containers and ensures that they are running and are healthy.

* *other tools* — Node contains additional tools like Docker, to handle the container operations like pulling the image, running and so on.
> Nodes are workers, which run application containers. They consist of the kubelet agent, which manages the Node and comunicates with the Master.

## Kubernetes resources

### Pod

![Pod in Kubernetes cluster](https://cdn-images-1.medium.com/max/2234/1*abyDaD6DLQEaWGZsszPhuA.jpeg)*Pod in Kubernetes cluster*

Pod is the smallest resource in k8s. It represents a group of one or more application containers and some shared resources (volumes). It runs on a private, isolated network, so containers can talk to each other using *localhost*. Normally, you would have one container per Pod. But sometimes, we can run multiple containers in one Pod. Typically it happens, when we want to implement side-car (read more about this pattern in [Designing Distributed Systems](https://learning.oreilly.com/library/view/designing-distributed-systems/9781491983638/) or [Dave’s post](https://blog.davemdavis.net/2018/03/13/the-sidecar-pattern/)).

Example:

<iframe src="https://medium.com/media/d18d4b272ba3934e4bd3551a0f3a6fa0" frameborder=0></iframe>

To deploy a single Pod, you should run kubectl create pod-file.yaml or kubectl apply -f pod-file.yaml. Both commands are quite similar, but in comparison to create (which creates a resource), apply modifies an existing k8s object or creates new if it doesn’t already exist. To see how it works, let’s clone [this repository](https://github.com/katarzyna-dusza/k8s-medium.git) and run the following command:

    *# deploy single Pod*

    kubectl apply -f example-pod.yaml

    *# see running Pod*

    kubectl get pods

💡* [Kubectl](https://kubernetes.io/docs/reference/kubectl/overview/) is a* *command-line client for k8s. It communicates with [kube-apiserver](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/) (REST server), which then performs all operations.*

💡* Most of the k8s commands consist of an action and a resource, on which this action is performed:*

    *# <action> represents a verb like create, delete. 
    # <resource> represents a k8s object.*

    kubectl <action> <resource> <resource-name> <flags>

    *# e.g.*
    kubectl get pods my-pod
    kubectl get pods
    kubectl create deployment.yaml
    kubectl apply -f deployment.yaml

👉 *Other commands: [cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) and [kubectl overview](https://kubernetes.io/docs/reference/kubectl/overview/).*

💡 *You can use short names for the k8s resources:*

    *pods (or pod): po, 
    services (or service): svc, 
    deployments (or deployment): deploy, 
    ingresses (or ingress): ing, 
    namespaces (or namespace): ns, 
    nodes (or node): no*

    *# example (means kubectl get pods (or kubectl get pod))*

    kubectl get po
> Pod is the smallest resource in k8s. It runs on a private, isolated network and hosts app container instance. One Pod can contain multiple containers.

### Deployment

![Deployment in Kubernetes cluster](https://cdn-images-1.medium.com/max/2234/1*QHmcr5htGDzr5yYIrZXrcg.jpeg)*Deployment in Kubernetes cluster*

Deployment is a k8s abstraction, which is responsible for managing (creating, updating, deleting) Pods. To deploy your application, you can always use Pods as in the previous example, however, using Deployments is a recommended way, which brings a lot of advantages:

* y*ou don’t have to worry about managing Pods. *If one of the Pods terminates, the Deployment controller will create another Pod immediately. Deployments always take care of having a proper number of running Pods,

* *you have only one file, where you “define” Pod specification and desired number of running Pods.* Pod specification is under spec.template key, whereas number or running Pods is under spec.replicas,

* *it provides a self-healing mechanism in case of machine failure. *If the Node hosting an instance goes down or is deleted, the Deployment controller replaces the instance with an instance on another Node in the cluster,

* *it provides an easy way to rolling updates, etc.* If you want to apply a change to your Pods, Deployment will update all Pods gradually, one by one.

Example:

<iframe src="https://medium.com/media/b7c65d5e188ac046bb54da9ed17eba8c" frameborder=0></iframe>

Let’s create Deployments!

Before we start deploying backend and frontend, we have to make sure that the database is up and running. Our web server depends on the database’s health, so in case of issues with database connection, it will throw an error. Clone the [Github repository](https://github.com/katarzyna-dusza/k8s-medium/)* *and* *run the following commands to deploy the database:

    *# deploy database*

    kubectl apply -f database/deployment/database-deployment.yaml
    kubectl apply -f database/deployment/database-service.yaml

Now, let’s build the image and deploy backend:

    *# build backend docker image*

    docker build -t backend:v1 ./backend

    *# deploy backend*

    kubectl apply -f ./backend/deployment/backend-deployment.yaml

Repeat the above steps to deploy the frontend. The source code with the Dockerfile is under the*frontend/* directory:

    *# build frontend docker image*

    docker build -t frontend:v1 ./frontend

    *# deploy frontend*

    kubectl apply -f ./frontend/deployment/frontend-deployment.yaml

As a result, you should see running Deployments and Pods inside the cluster:

    kubectl get po,deploy

![Screenshot from iTerm — kubectl get po, deploy](https://cdn-images-1.medium.com/max/2000/1*RjoU8BvEB8md4MCYKA1dFQ.png)*Screenshot from iTerm — kubectl get po, deploy*
> Deployment is responsible for creating and updating instances of your application. It monitors the application instance and provides a self-healing mechanism in case of machine failure.

### Service

![Service in Kubernetes cluster](https://cdn-images-1.medium.com/max/2234/1*GFfD2AkdqS4kwrcBL86s3A.jpeg)*Service in Kubernetes cluster*

We already have Deployments, which started Pods with Docker containers inside. Even though they are deployed and ready to use, we can’t access them. Now it’s time to introduce a Service resource!

Service is another k8s object. Using it, we can make our Pods accessible from the inside, or outside k8s cluster. Service matches a set of Pods using selector defined in the Service under spec section and labels defined in the Pods’ metadata. So if the Pod has the label e.g.app: my-app, then the Service uses this *label* as a *selector* to know, which Pods should it expose.

Currently, Service has only 4 types:

* *ClusterIP* — the default one. It allocates a cluster-internal IP address, and it makes our Pods reachable only from the inside the cluster.

* *NodePort* — built on top of the ClusterIP (ClusterIP on steroids 💪). Service is now reachable not only from the inside of the cluster through the service’s internal cluster IP, but also from the outside: curl <node-ip>:<node-port>. Each Node opens the same port (node-port), and redirects the traffic received on that port to the specified Service.

* *LoadBalancer* — build on top of the NodePort (NodePort on steroids 💪). Service is accessible outside the cluster: curl <service-EXTERNAL-IP>. Traffic is now coming via LoadBalancer, which then is redirected to the Nodes on a specific port (node-port).

* *ExternalName* — this type is different than the previously mentioned. Here, you can have access to an external reference (web services/database/…) deployed somewhere else. Your Pods running in the k8s cluster can access them by using name specified in the Service YAML file. If you are more interested in *ExternalName* type, go to 👉 [Kubernetes troubleshooting](https://medium.com/@katarzyna.jolanta.dusza/kubernetes-troubleshooting-42ac0754422d?source=friends_link&sk=2287b608d0c42666a93b040bd6a28af9).

Example:

<iframe src="https://medium.com/media/954b48cdb568aa289dc28694e81128d5" frameborder=0></iframe>

Let’s create Services!

👉 *Links to the [Github repository](https://github.com/katarzyna-dusza/k8s-medium/) and [Kubernetes troubleshooting](https://medium.com/@katarzyna.jolanta.dusza/kubernetes-troubleshooting-42ac0754422d?source=friends_link&sk=2287b608d0c42666a93b040bd6a28af9) article.*

    *# deploy backend Service*

    kubectl apply -f ./backend/deployment/backend-service.yaml

    *# deploy frontend Service*

    kubectl apply -f ./frontend/deployment/frontend-service.yaml

As a result, you should see running Services inside the cluster:

    kubectl get svc

![Screenshot from iTerm — kubectl get svc](https://cdn-images-1.medium.com/max/2000/1*nj1k0QcQ-nw45vKPYhwv1w.png)*Screenshot from iTerm — kubectl get svc*
> Service defines the policy, by which we are able to access the Pods. Service matches a set of Pods using his selector and Pod’s labels. There are 4 types of Services: ClusterIP, NodePort, LoadBalander and ExternalName. Connections to the Service are load-balanced across all the backing pods.

### Ingress

![Ingress in Kubernetes cluster](https://cdn-images-1.medium.com/max/2234/1*EwkUVEghw35ZzmLYwmdClA.jpeg)*Ingress in Kubernetes cluster*

Ingress is a simple proxy, which routes traffic to the Services in the cluster. In one Ingress you can specify multiple Services to which it will redirect the traffic. Potentially, we don’t have to use Ingresses, but using it brings some advantages like having virtual hosts, SSL, CORS settings and so on.

Example:

<iframe src="https://medium.com/media/ae8eeb2f3cdf98f739f0aa0345f76649" frameborder=0></iframe>

Let’s create Ingresses!

👉 *Links to the [Github repository](https://github.com/katarzyna-dusza/k8s-medium/) and [Kubernetes troubleshooting](https://medium.com/@katarzyna.jolanta.dusza/kubernetes-troubleshooting-42ac0754422d?source=friends_link&sk=2287b608d0c42666a93b040bd6a28af9) article.*

    *# deploy backend Ingress*

    kubectl apply -f ./backend/deployment/backend-ingress.yaml

    *# deploy frontend Ingress*

    kubectl apply -f ./frontend/deployment/frontend-ingress.yaml

As a result, you should see running Ingresses inside the cluster:

    kubectl get ing

![Screenshot from iTerm — kubectl get ing](https://cdn-images-1.medium.com/max/2000/1*2xv2FUqD-LFKgXXuVqH2Cg.png)*Screenshot from iTerm — kubectl get ing*

We have already deployed a complete application stack. Now, let’s check how does it look [in the browser](http://frontend.domain.com/).
> Ingress is a simple proxy, which routes the traffic to the Services in the cluster. It is easily extensible to take care of eg. CORS settings or SSL. It’s possible to have one Ingress for all Services in your cluster.

## Scaling, rollback and quick updates

### Scaling

There are a couple of ways to quickly scale up or down replicas of the Deployment. You can scale them based on specific conditions, like current replicas number. If you need, you can also turn on autoscaling in the cluster. Read [this resource](https://kubernetes.io/blog/2016/07/autoscaling-in-kubernetes/) for more details.

    *# scale the resource to specific number of replicas*

    kubectl scale --replicas=REPLICAS_NUMBER -f your-yaml-file.yaml

    *# example: scale backend-deployment.yaml*

    kubectl scale --replicas=3 ./backend/deployment/backend-deployment.yaml

    *# scale up to 3, when the current number of replicas of deployment is 2*

    kubectl scale --current-replicas=2 --replicas=3 deployment/DEPLOYMENT_NAME

    *# autoscale deployment between 2 - 10*

    kubectl autoscale deployment DEPLOYMENT_NAME --min=2 --max=10

👉 *More scaling commands: [cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/#scaling-resources).*

### Rollback

Sometimes it happens that we deployed a new feature, which has a bug. If it’s something serious, engineers choose the option to roll back the current version to the previous one. Kubernetes allows us to do it

    *# rolling update "c" containers of "DEPLOYMENT_NAME" deployment, updating the IMAGE_NAME image*

    kubectl set image deployment/DEPLOYMENT_NAME c=IMAGE_NAME:v2

    *# rollback to the previous deployment  *
               
    kubectl rollout undo deployment/DEPLOYMENT_NAME

    *# watch rolling update status of deployment until completion     * 
                      
    kubectl rollout status -w deployment/DEPLOYMENT_NAME

### Quick updates

    *# update a single-container pod's image version (tag) to v4*

    kubectl get pod POD_NAME -o yaml | sed 's/\(image: IMAGE_NAME\):.*$/\1:v4/' | kubectl replace -f -

    *# add a label*

    kubectl label pods POD_NAME new-label=awesome

    *# add an annotation*

    kubectl annotate pods POD_NAME icon-url=http://goo.gl/XXBTWq

## Exercise

Now it’s time for an exercise for you. Inside the /exercise directory, you will find a small service with Dockerfile. All you need to do is build the image and create YAMLs to deploy the app on k8s!

Good luck! 🚀

## Conclusion

The tutorial, which you have just finished allows you to start working with Kubernetes. I tried to point out the most important/tricky parts, which sometimes gave me sleepless nights 😴.

Kubernetes is a very powerful platform. When you understand the basic concepts, you can already do a lot, but you will be still hungry to learn and play more with it. Until now, I will leave you with some resources, which I encourage you to read one by one.

## Resources. Nice to read

* “[Kubernetes in action](https://www.yunforum.net/pdf/kubernetes-in-action.pdf)” book, written by Marko Luksa. My favorite book about Kubernetes.

* Kubernetes [docs](https://kubernetes.io/) — always very helpful.

* Kubernetes [API reference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.14/#servicespec-v1-core) — I very often look into the API. Sometimes it’s easier to understand resources (their specification, what they have, what they need) from API than from the docs.

* “[Kubernetes NodePort vs LoadBalancer vs Ingress?](https://medium.com/google-cloud/kubernetes-nodeport-vs-loadbalancer-vs-ingress-when-should-i-use-what-922f010849e0)” blog post written by Sandeep Dinesh, with a good explanation about exposing your Services, with nice pictures.
