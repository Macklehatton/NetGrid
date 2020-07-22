using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Mirror;

public class PlayerMovement : NetworkBehaviour
{
    [SerializeField]
    private float speed;
    [SerializeField]
    private float sprintSpeed;

    private float currentSpeed;

    private void Start()
    {
        if (IsLocalPlayer == false)
        {
            Camera camera = GetComponentInChildren<Camera>();

            if (camera != null)
            {
                camera.gameObject.SetActive(false);
            }
            return;
        }
    }

    private void Update()
    {
        if (IsLocalPlayer == false)
        {
            return;
        }

        if (Input.GetButton("Sprint"))
        {
            currentSpeed = sprintSpeed;
        }
        else
        {
            currentSpeed = speed;
        }

        float moveX = Input.GetAxis("Horizontal");
        float moveY = Input.GetAxis("Vertical");

        Vector3 movementVector = new Vector3(moveX, 0.0f, moveY).normalized;

        transform.position += transform.TransformDirection(movementVector) * currentSpeed * Time.deltaTime;
    }    
}
