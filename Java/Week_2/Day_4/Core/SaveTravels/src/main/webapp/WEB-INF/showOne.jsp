<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<meta charset="UTF-8">
<title>Show One</title>
</head>
<body>
	<div class="container p-4 card mt-5">
	<div class="d-flex justify-content-between align-items-center">
		<h1 class="mb-5">Expenses Details</h1>
		<a href="/expenses" class="btn btn-primary">Get Back</a>
	</div>
	<div class="card p-3">
		<p>Expenses Name : ${travel.name}</p>
		<p>Expenses Description : ${travel.description}</p>
		<p>Vendor : ${travel.vendor}</p>
		<p>Amount : ${travel.amount}</p>
	</div>		
	</div>
</body>
</html>