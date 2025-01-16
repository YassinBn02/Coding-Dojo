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
<meta charset="UTF-8">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<title>Edit Expenses</title>
</head>
<body>
	<div class="container p-4 mt-5 card">
			<div class="d-flex justify-content-between align-items-center">
				<h1>Edit Burger :</h1>
				<a href="/expenses" class="btn btn-primary">Get Back</a>
			</div>
			<form:form modelAttribute="travel" method="POST" action="/expenses/edit/${travel.id}">
	            <div>
	                <input type="hidden" name="_method" value="PUT">
	                <form:label path="name">Expenses Name : </form:label>
	                <form:input type="text" path="name" class="form-control"/>
	                <form:errors class="badge text-danger" path="name"/>
	            </div>
	            
				<div>
	                
	                <form:label path="vendor">Vendor : </form:label>
	                <form:input type="text" path="vendor" class="form-control"/>
	                <form:errors class="badge text-danger" path="vendor"/>
	            </div>
	            
	            <div>
	                
	                <form:label path="amount">Amount : </form:label>
	                <form:input type="text" path="amount" class="form-control"/>
	                <form:errors class="badge text-danger" path="amount"/>
	            </div>
	            	            
	            <div>
	                <form:label path="description">Description : </form:label>
	                <form:textarea path="description" class="form-control"></form:textarea>
	                <form:errors  class="badge text-danger"  path="description"/>
	            </div>
	            
	            <button type="submit" class="btn btn-primary mt-3">Edit</button>
        	</form:form>
		</div>
</body>
</html>