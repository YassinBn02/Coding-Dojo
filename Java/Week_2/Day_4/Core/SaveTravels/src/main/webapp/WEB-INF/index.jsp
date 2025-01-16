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
<title>Expenses</title>
</head>
<body>
	<div class="container p-4">
		<h1 class="mb-3 text-center">Save Travels</h1>
		<table class="table table-striped">
		    <thead>
		        <tr>
		            <th>Expenses</th>
		            <th>Vendor</th>
		            <th>Amount</th>
		            <th>Actions</th>
		        </tr>
		    </thead>
		    <tbody>
		         <c:forEach var="travel" items="${travels}">
		         	<tr>
		         		<td><a href="/expenses/${travel.id}">${travel.name}</a></td>
		         		<td>${travel.vendor}</td>
		         		<td>${travel.amount}</td>
		         		<td>
		         			<div class="d-flex gap-3">
		         			<a href="/expenses/edit/${travel.id}" class="btn btn-warning">edit</a>
		         			<form action="/expenses/delete/${travel.id}" method="post">
							    <input type="hidden" name="_method" value="DELETE">
							    <input type="submit" value="Delete" class="btn btn-danger">
							</form>
							</div>
		         		</td>
		         	</tr>
		         </c:forEach>
		    </tbody>
		</table>
		
		<div class=" card ml-5 mt-5 p-4">
			<h1>Add an expenses :</h1>
			<form:form modelAttribute="travel" method="POST" action="/expenses">
	            <div>
	                
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
	            
	            <button type="submit" class="btn btn-primary mt-3">Submit</button>
        	</form:form>
		</div>
	</div>
</body>
</html>