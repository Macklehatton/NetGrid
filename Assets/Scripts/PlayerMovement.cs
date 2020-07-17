using System.Collections;
using System.Collections.Generic;
using UnityEngine;
//using Mirror;

public class PlayerMovement : MonoBehaviour
{
    [SerializeField]
    private float holdDelay;

    [SerializeField]
    private Vector3 movementVector;
    [SerializeField]
    private float movementScale;

    private float timeSincePress;

    private void Update()
    {
        timeSincePress += Time.deltaTime;

        float moveX = Input.GetAxis("Horizontal");
        float moveY = Input.GetAxis("Vertical");

        movementVector = new Vector3(moveX, 0.0f, moveY);

        if (timeSincePress > holdDelay)
        {
            if (movementVector != Vector3.zero)
            {
                transform.position += movementVector * movementScale;
                timeSincePress = 0.0f;
            }
        }
    }
}
